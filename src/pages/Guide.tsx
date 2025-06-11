
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageCircle, Clock, Users, Shield, Smartphone, CheckCircle } from "lucide-react";

const Guide = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/5a8b5ed6-5d6c-4e4e-8dd8-64dccd82688b.png" 
                alt="Kalenda Logo" 
                className="h-16 w-16"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Panduan Penggunaan Kalenda
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Kelola jadwal pertemuan Anda dengan mudah melalui WhatsApp dan teknologi AI
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Tabs defaultValue="setup" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="setup" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                Persiapan
              </TabsTrigger>
              <TabsTrigger value="features" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Fitur
              </TabsTrigger>
              <TabsTrigger value="examples" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Contoh
              </TabsTrigger>
              <TabsTrigger value="tips" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Tips
              </TabsTrigger>
            </TabsList>

            <TabsContent value="setup" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    Cara Memulai
                  </CardTitle>
                  <CardDescription>
                    Ikuti langkah-langkah sederhana ini untuk mulai menggunakan Kalenda
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Badge variant="outline" className="min-w-8 h-8 rounded-full flex items-center justify-center">1</Badge>
                      <div>
                        <h3 className="font-semibold">Hubungkan Google Calendar</h3>
                        <p className="text-gray-600">Masuk ke akun Google Anda dan berikan izin kepada Kalenda untuk mengakses kalender. Kami hanya membaca ketersediaan waktu dan membuat acara yang Anda setujui.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Badge variant="outline" className="min-w-8 h-8 rounded-full flex items-center justify-center">2</Badge>
                      <div>
                        <h3 className="font-semibold">Simpan Nomor WhatsApp Kalenda</h3>
                        <p className="text-gray-600">Tambahkan nomor <strong>+62 813-8514-2847</strong> ke kontak Anda dengan nama "Kalenda".</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Badge variant="outline" className="min-w-8 h-8 rounded-full flex items-center justify-center">3</Badge>
                      <div>
                        <h3 className="font-semibold">Mulai Gunakan</h3>
                        <p className="text-gray-600">Kirim pesan pertama Anda ke Kalenda dan rasakan kemudahan penjadwalan dengan AI!</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      Buat Jadwal Meeting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Buat jadwal pertemuan baru dengan mudah</p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-blue-700 text-sm">"Buatkan jadwal meeting dengan John besok jam 2 siang selama 1 jam"</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-green-500" />
                      Ubah Jadwal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Pindahkan atau ubah jadwal yang sudah ada</p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-green-700 text-sm">"Pindahkan meeting dengan Sarah dari jam 3 ke jam 4 sore"</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-500" />
                      Batalkan Meeting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Batalkan pertemuan yang tidak jadi</p>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-purple-700 text-sm">"Batalkan meeting dengan Tim besok"</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-orange-500" />
                      Cek Jadwal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Lihat jadwal Anda untuk hari atau minggu tertentu</p>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-orange-700 text-sm">"Apa jadwalku hari ini?" atau "Jadwal minggu depan gimana?"</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="examples" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contoh Percakapan dengan Kalenda</CardTitle>
                  <CardDescription>
                    Berikut adalah contoh-contoh cara berkomunikasi dengan Kalenda
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-700">Membuat Meeting Baru</h4>
                      <div className="mt-2 space-y-2">
                        <div className="bg-gray-100 p-2 rounded text-sm">
                          <strong>Anda:</strong> "Buatkan meeting dengan client PT. ABC besok jam 10 pagi selama 2 jam"
                        </div>
                        <div className="bg-green-100 p-2 rounded text-sm">
                          <strong>Kalenda:</strong> "Meeting berhasil dibuat! 📅<br/>
                          📍 Meeting dengan PT. ABC<br/>
                          📅 Besok, 15 Januari 2024<br/>
                          🕙 10:00 - 12:00 WIB<br/>
                          Meeting sudah ditambahkan ke Google Calendar Anda."
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-700">Mengubah Jadwal</h4>
                      <div className="mt-2 space-y-2">
                        <div className="bg-gray-100 p-2 rounded text-sm">
                          <strong>Anda:</strong> "Meeting dengan PT. ABC besok dimajukan jadi jam 9 pagi"
                        </div>
                        <div className="bg-green-100 p-2 rounded text-sm">
                          <strong>Kalenda:</strong> "Meeting berhasil diubah! ✅<br/>
                          📍 Meeting dengan PT. ABC<br/>
                          📅 Besok, 15 Januari 2024<br/>
                          🕙 09:00 - 11:00 WIB (diubah dari 10:00-12:00)<br/>
                          Kalender sudah diperbarui."
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-orange-700">Mengecek Jadwal</h4>
                      <div className="mt-2 space-y-2">
                        <div className="bg-gray-100 p-2 rounded text-sm">
                          <strong>Anda:</strong> "Jadwalku hari ini apa aja?"
                        </div>
                        <div className="bg-green-100 p-2 rounded text-sm">
                          <strong>Kalenda:</strong> "Ini jadwal Anda hari ini: 📅<br/>
                          🕙 09:00-10:00 - Meeting Team Sprint<br/>
                          🕙 14:00-15:00 - Call dengan Client<br/>
                          🕙 16:00-17:00 - Review Proposal<br/>
                          Total: 3 meeting hari ini."
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tips" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tips Penggunaan Kalenda</CardTitle>
                  <CardDescription>Maksimalkan pengalaman Anda dengan Kalenda</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Gunakan Bahasa Natural
                      </h3>
                      <p className="text-gray-600 mb-3">Kalenda memahami bahasa Indonesia yang natural. Tidak perlu menggunakan format khusus:</p>
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-green-800 mb-1">✅ Bagus:</p>
                          <p className="text-green-700 text-sm">"Meeting dengan bos besok sore jam 3"</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-green-800 mb-1">✅ Juga Bagus:</p>
                          <p className="text-green-700 text-sm">"Bikin jadwal ketemu klien minggu depan"</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-500" />
                        Sebutkan Detail Penting
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• <strong>Durasi:</strong> "30 menit", "2 jam", "setengah hari"</li>
                        <li>• <strong>Peserta:</strong> Nama atau jabatan orang yang akan hadir</li>
                        <li>• <strong>Topik:</strong> "presentasi", "review project", "brainstorming"</li>
                        <li>• <strong>Lokasi:</strong> "Zoom", "ruang meeting", "kantor cabang"</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <MessageCircle className="h-5 w-5 text-purple-500" />
                        Waktu Fleksibel
                      </h3>
                      <p className="text-gray-600 mb-3">Kalenda bisa mencari waktu terbaik jika Anda fleksibel:</p>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-purple-700 text-sm">"Carikan waktu kosong minggu ini untuk meeting dengan tim, sekitar 1-2 jam"</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Users className="h-5 w-5 text-orange-500" />
                        Meeting Berulang
                      </h3>
                      <p className="text-gray-600 mb-3">Buat jadwal meeting rutin dengan mudah:</p>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-orange-700 text-sm">"Bikin meeting tim setiap Senin jam 9 pagi"</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pertanyaan Umum</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Bagaimana jika saya salah mengetik pesan?</h4>
                      <p className="text-gray-600 text-sm">Cukup kirim pesan perbaikan. Kalenda memahami konteks percakapan dan bisa mengkoreksi jadwal sesuai instruksi terbaru.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Apakah Kalenda bisa mengatur jadwal orang lain?</h4>
                      <p className="text-gray-600 text-sm">Saat ini Kalenda hanya bisa mengelola kalender pribadi Anda. Setiap orang perlu menghubungkan akun mereka sendiri.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Bagaimana jika waktu yang disarankan tidak cocok?</h4>
                      <p className="text-gray-600 text-sm">Beritahu Kalenda bahwa waktunya tidak cocok dan minta alternatif lain. Kalenda akan mencari opsi waktu baru berdasarkan ketersediaan Anda.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Apakah data kalender saya aman?</h4>
                      <p className="text-gray-600 text-sm">Ya! Kalenda hanya mengakses data yang diperlukan untuk penjadwalan dan tidak menyimpan atau membagikan informasi pribadi Anda.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Guide;
