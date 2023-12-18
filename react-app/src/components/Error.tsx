import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export default function Error(msg:string) {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
        }}>
            <Alert severity="error">{msg}</Alert>
        </Box>
    );
}