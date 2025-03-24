import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";



function TodoItem({ todo, fetchDetailsOfCurrentTodo }) {

    console.log(todo);
    return (
        <>
            <Card sx={{
                maxWidth : 350,
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'space-between',
                // margin : '10px',
                overflow : 'hidden',
            }}>
                <CardContent>
                    <Typography variant="h5" color={'text.secondary'}>
                        {todo?.todo}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button 
                        onClick={() => fetchDetailsOfCurrentTodo(todo?.id)}
                        sx={{
                            backgroundColor : 'black',
                            color : 'white',
                            opacity : '0.75',
                            '&:hover' : {
                                backgroundColor : 'white',
                                color : 'black',
                                opacity : '1',
                        }
                    }}>
                        Show Details
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default TodoItem