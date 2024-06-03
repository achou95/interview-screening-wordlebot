import { Box, CircularProgress, Container, Divider, Typography } from "@mui/material";
import Layout from "./components/Layout";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { WordleRequest, fetchWordleResult } from "./api/api";
import GuessWord from "./components/GuessWord";
import WordResponse from "./components/WordResponse";
import { LoadingButton } from "@mui/lab";

let wordleRequestItems: WordleRequest = []
let guesses: string[] = []

function App() {
    const [word, setWord] = useState("")
    const [clue, setClue] = useState("xxxxx")
    const [error, setError] = useState("")
    const [guessNumber, setGuessNumber] = useState(1)
    const [submitLoading, setSubmitLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const updateClue = (c: string) => {
        setClue(c)
    }

    const onSubmit = async () => {
        setSubmitLoading(true)
        setError('')
        try {
            if (clue === 'ggggg') {
                setSuccess(clue === 'ggggg')
            } else {
                const guess = await fetchWordleResult([...wordleRequestItems, {word: word, clue: clue}])
                guesses.push(guess.guess)
                setWord(guess.guess)
            }
            wordleRequestItems.push({word: word, clue: clue})
            setGuessNumber(guessNumber + 1)
            setClue('xxxxx')
        } catch (e) {
            console.log(e)
            if (String(e).includes('state leaves no remaining words in the dictionary')) {
                setError('Error: Bot failed to find word with the given conditions.')
            } else {
                setError('Error: Please refresh to try again.')
            }
        }
        setSubmitLoading(false)
    }

    const getFirstGuess = async () => {
        const data = await fetchWordleResult([])
        setWord(data.guess)
        guesses[0] = data.guess
    }

    useEffect(() => {
        getFirstGuess()
    }, [])

    return (
        <Layout>
            <Container maxWidth="sm" sx={{mb: 4}}>
            <Header />
            {!!word ? (
                <>
                    {wordleRequestItems && (
                        wordleRequestItems.map((item, i) =>
                        <div key={item.word + i}>
                            <Typography variant="h4">
                                Guess #{i + 1}
                            </Typography>
                            <GuessWord>{item.word}</GuessWord>
                            <WordResponse setClue={updateClue} clue={item.clue} active={false}>{item.word}</WordResponse>
                            <Divider sx={{my: 2}}/>
                        </div>
                        )
                    )}
                    {success ? (
                        <Typography variant="h4" mt={2}>Yay! All Done</Typography>
                    ) : (
                        <>
                            <Typography variant="h4">
                            Guess #{guessNumber}
                            </Typography>
                            <GuessWord>{guesses[guessNumber-1]}</GuessWord>
                            {guesses.length < 6 ? (
                                <>
                                    <WordResponse setClue={updateClue} clue={clue} active={!success}>{guesses[guessNumber - 1]}</WordResponse>
                                    <Box display="flex" justifyContent="right">
                                        <LoadingButton variant="contained" onClick={onSubmit} loading={submitLoading}>Submit</LoadingButton>
                                    </Box>
                                </>
                            ) : (
                                <>
                                    <Divider sx={{my: 2}}/>
                                    <Typography variant="h4" mt={2}>All guess attempts given</Typography>
                                </>
                            )}  
                            <Typography variant="body2" color="red" mt={2}>{error}</Typography>
                        </>
                    )}
                </>
            ) : (
                <Box display="flex" justifyContent="center" marginTop={3}>    
                    <CircularProgress />
                </Box>
            )
            }
            </Container>
        </Layout>
    );
}

export default App;
