type RouteConfig = {
  title: string | ((param: string) => string);
  route: string | ((id?: string) => string);
};

export const ROUTES: Record<string, RouteConfig> = {
    DASHBOARD: { 
        title: "Home",
        route: "/"
    },
    CLASS: {
        title: "Kelas",
        route: "/kelas"
    },
    MHS: {
        title: "Mahasiswa",
        route: "/mahasiswa"
    },
    CLASS_DETAIL: {
        title : (nmKelas: string) => nmKelas,
        route : (id?: string) => `/kelas/${id}`
    }
}
