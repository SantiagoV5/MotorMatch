import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthSidePanel from './AuthSidePanel'

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] h-[800px] flex overflow-hidden rounded-xl shadow-2xl bg-white dark:bg-slate-900">

        {/* Panel izquierdo compartido */}
        <AuthSidePanel description="Encuentra la motocicleta perfecta que se adapte a tu estilo de vida y pasion por la carretera." />

        {/* Panel derecho: formulario */}
        <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-16 bg-white dark:bg-slate-900 overflow-y-auto">

          {/* Encabezado */}
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-neutral-dark dark:text-slate-100 mb-2">
              Bienvenido de nuevo
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Ingresa a tu cuenta para gestionar tus motos favoritas.
            </p>
          </div>

          {/* Tabs de navegacion */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8">
            <button className="flex-1 pb-4 text-sm font-bold border-b-2 border-primary text-primary tracking-wide">
              INICIAR SESION
            </button>
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="flex-1 pb-4 text-sm font-bold border-b-2 border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors tracking-wide"
            >
              REGISTRARSE
            </button>
          </div>

          {/* Formulario */}
          <form className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-neutral-dark dark:text-slate-300 mb-2">
                Correo Electronico
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  mail
                </span>
                <input
                  type="email"
                  placeholder="ejemplo@motormatch.com"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
                />
              </div>
            </div>

            {/* Contrasena */}
            <div>
              <label className="block text-sm font-semibold text-neutral-dark dark:text-slate-300 mb-2">
                Contrasena
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  lock
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="xxxxxxxxxx"
                  required
                  className="w-full pl-12 pr-12 py-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                  aria-label={showPassword ? 'Ocultar contrasena' : 'Mostrar contrasena'}
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Recordarme + Olvidaste */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="size-4 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-neutral-dark transition-colors">
                  Recordarme
                </span>
              </label>
              <a href="#" className="text-sm font-medium text-accent hover:underline">
                Olvidaste tu contrasena?
              </a>
            </div>

            {/* Boton submit */}
            <button
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 tracking-wider"
            >
              INGRESAR
            </button>
          </form>

          {/* Divisor */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white dark:bg-slate-900 px-4 text-slate-500">
                O continua con
              </span>
            </div>
          </div>

          {/* Botones sociales (visuales, pendiente OAuth) */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <svg className="size-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Google</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <svg className="size-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Facebook</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-8 text-center">
            <p className="text-sm text-slate-500">
              Aun no eres parte de la comunidad?{' '}
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="text-primary font-bold hover:underline"
              >
                Crea una cuenta gratis
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginForm
