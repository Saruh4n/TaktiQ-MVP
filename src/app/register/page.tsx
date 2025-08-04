"use client"

import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Üye Ol</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Adınızı girin" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">E-posta</label>
            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="E-posta adresinizi girin" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Şifre</label>
            <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Şifrenizi girin" />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors font-semibold">Üye Ol</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Zaten hesabınız var mı?{' '}
          <Link href="/login" className="text-green-600 hover:underline">Giriş Yap</Link>
        </p>
      </div>
    </div>
  )
}