'use client';

import ReactQueryProvider from '@/providers/react-query';

import ThemeProvider from '@/providers/theme-provider';

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem={true}
      disableTransitionOnChange={true}
    >
      <ReactQueryProvider>

        {children}

      </ReactQueryProvider>
    </ThemeProvider>
  );
}

export default Provider;
