import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { authApi, configApi } from '@/api/endpoints';
import { authStore } from '@/store/authStore';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';

function Logo({ size = 40 }: { size?: number }) {
  const [err, setErr] = useState(false);
  if (!err) {
    return (
      <img src="/logo.png" alt="Skillyme"
        style={{ width: size, height: size }}
        className="object-contain rounded-lg"
        onError={() => setErr(true)} />
    );
  }
  return (
    <div style={{ width: size, height: size }}
      className="bg-[#3730A3] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
      <span className="text-white font-bold text-lg font-heading">S</span>
    </div>
  );
}

export default function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { data: config } = useQuery({
    queryKey: ['config'],
    queryFn: () => configApi.get(),
    staleTime: Infinity,
  });

  if (user) return <Navigate to="/dashboard" replace />;

  const programName = config?.data.programName ?? 'Skillyme Africa';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await authApi.login({ email, password });
      authStore.setAuth(res.data.user, res.data.accessToken, res.data.refreshToken);
      navigate('/dashboard');
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { error?: { message?: string } } } })
        ?.response?.data?.error?.message ?? 'Login failed. Check your credentials.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* ── Left: brand panel with illustration background ── */}
      <div className="bg-[#0A1A1A] relative lg:w-[52%] hidden lg:flex flex-col justify-end px-10 py-12 min-h-[400px] lg:min-h-screen overflow-hidden">
        
        {/* Background Illustration */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/login-illustration.png" 
            alt="Skillyme Africa background" 
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for text readability at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3730A3] via-[#3730A3]/70 to-transparent" />
        </div>
        
        {/* Quote & Footer */}
        <div className="relative z-10 w-full text-center mt-auto pt-24 pb-6">
          <p className="text-white font-heading text-3xl lg:text-4xl leading-snug mb-2 font-bold drop-shadow-lg">
            "Where bold ideas <br /> find their footing."
          </p>
          <p className="text-white/90 text-sm lg:text-base drop-shadow-lg">
            A platform built for Africa's next generation of builders.
          </p>
        </div>
      </div>

      {/* ── Right: login form ── */}
      <div className="flex-1 bg-white flex items-center justify-center px-6 py-14 lg:py-0">
        <div className="w-full max-w-sm animate-fade-in">

          {/* Mobile logo — hidden on lg */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <Logo size={32} />
            <div>
              <p className="text-[#111827] font-semibold text-sm">{programName.split('—')[0].trim()}</p>
              <p className="text-[#F59E0B] text-[10px] uppercase tracking-widest font-semibold">Cohort 2</p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="font-heading text-4xl text-[#111827] font-bold">Welcome back</h2>
            <p className="text-base text-[#111827]/80 mt-1.5">Sign in to your dashboard and team workspace.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
              className="bg-gray-200 border-none shadow-none rounded-none focus:ring-[#3730A3] h-12"
              labelClassName="!normal-case !text-lg !font-medium !text-black tracking-normal mb-2"
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
              className="bg-gray-200 border-none shadow-none rounded-none focus:ring-[#3730A3] h-12"
              labelClassName="!normal-case !text-lg !font-medium !text-black tracking-normal mb-2 mt-4"
            />

            {error && (
              <div className="bg-[#FEF2F2] border border-[#DC2626]/20 rounded-md px-4 py-3 text-sm text-[#DC2626]">
                {error}
              </div>
            )}

            <Button type="submit" loading={loading} className="w-full bg-[#3730A3] hover:bg-[#312E81] text-white uppercase font-bold tracking-widest rounded-none border-none h-12" size="lg">
              SIGN IN
            </Button>
          </form>

          <div className="mt-6 pt-5 border-t border-[#3730A3]/08">
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Forgot your password?{' '}
              <span className="text-[#3730A3] font-semibold">
                Contact {config?.data.adminEmail ?? 'your admin'} to reset it.
              </span>
            </p>
            <p className="text-xs text-[#6B7280] mt-2.5">
              Not a member yet?{' '}
              <a href="/apply" className="text-[#3730A3] font-semibold hover:underline">
                Apply to Cohort 2 →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
