import { CardContent, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";

export type ClassCardProps = {
    nmKelas: string
    jmlhMhs: number
    nmJurusan: string
}

export default function ClassCard({nmKelas, jmlhMhs,nmJurusan} : ClassCardProps) {
    return (
        <Card variant="outlined" sx={{ height: '100%'}}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    {nmKelas}
                </Typography>
                <Stack
                    direction="column"
                    sx={{ justifyContent: 'space-between', gap: 1 }}
                >
                    <Typography variant="h4" component="p">
                        {jmlhMhs} Mahasiswa
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}