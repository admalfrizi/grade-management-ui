import { ROUTES } from "@/lib/route";
import { Button, CardContent, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Link from "next/link";

export type ClassCardProps = {
    id?: number
    nmKelas: string
    jmlhMhs: number
    nmJurusan: string
    isConfigurable: boolean
}

export default function ClassCard({id, nmKelas, jmlhMhs,nmJurusan, isConfigurable = false} : ClassCardProps) {
    return (
        <Card variant="outlined" sx={{ height: '100%'}}>
            <CardContent>
                <Typography component="h2" variant="h6" gutterBottom>
                    {nmKelas}
                </Typography>
                <Stack
                    direction="column"
                    sx={{ justifyContent: 'space-between', gap: 1 }}
                >
                    <Typography variant="subtitle2" component="p">
                        {jmlhMhs} Mahasiswa
                    </Typography>
                </Stack>
                    {
                        isConfigurable == true ? (
                            <Stack
                                direction="row"
                                sx={{ justifyContent: 'space-between', gap: 1, mt: 3 }}
                            >
                                <Button variant="outlined" sx={{textTransform: 'none', textDecorationLine : "none"}}>
                                    <Link href={ROUTES.CLASS_DETAIL.route(id)}>
                                        Detail
                                    </Link>
                                </Button>
                            </Stack> 
                        ) : null
                    }
            </CardContent>
        </Card>
    )
}