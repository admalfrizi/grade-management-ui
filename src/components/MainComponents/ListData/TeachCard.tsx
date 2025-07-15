import { CardContent, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";

export type TeachCardProps = {
    nmKelas: string
    jumlahSKS: number
    jumlahMhs: number
    timeFrom: string
    timeTo: string
}

export default function TeachCard({nmKelas, jumlahMhs,jumlahSKS,timeFrom, timeTo} : TeachCardProps) {
    return (
        <Card variant="outlined" sx={{ height: '100%'}}>
            <CardContent >
                <Typography component="h2" variant="h6" gutterBottom>
                    {nmKelas}
                </Typography>
                <Stack
                    direction="column"
                    sx={{ justifyContent: 'space-between', gap: 1 }}
                >
                    <Typography variant="subtitle2" component="p">
                        {jumlahMhs} Mahasiswa
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}