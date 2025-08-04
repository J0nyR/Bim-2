import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
          Selamat Datang di Aplikasi Perangkat Ajar Anda
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Welcome to Your Teaching Material Application
        </p>
      </div>

      <Card className="w-full max-w-md bg-card text-card-foreground shadow-lg p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">Pilih Perangkat Ajar / Select Teaching Material</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Button asChild className="w-full py-3 text-lg">
            <Link to="/lesson-plan-marine-engines">
              Rencana Pelaksanaan Pembelajaran (RPP) - Mesin Kapal
            </Link>
          </Button>
          <Button asChild className="w-full py-3 text-lg" variant="secondary">
            <Link to="/teaching-material-marine-engines">
              Materi Pembelajaran - Mesin Kapal (Segera Hadir)
            </Link>
          </Button>
          {/* Anda bisa menambahkan tautan ke perangkat ajar lainnya di sini */}
        </CardContent>
      </Card>

      <MadeWithDyad />
    </div>
  );
};

export default Index;