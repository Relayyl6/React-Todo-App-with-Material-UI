import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material"


function TodoDetails({ openDialog, todoDetails, setOpenDialog, setTodoDetails }) {


    return (
        <>
            <Dialog 
                onClose={() => {setOpenDialog(false)}} 
                open={openDialog}>
                    <DialogTitle>
                        {todoDetails?.todo}
                    </DialogTitle>
                <DialogActions>
                    <Button onClick={() => {
                            setOpenDialog(false);
                            setTodoDetails(null);
                        }}>
                            Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default TodoDetails