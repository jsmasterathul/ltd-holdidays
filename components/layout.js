import Head from "next/head";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <header>
        <div className="fixed w-screen">
          <div className="flex p-4 md:p-8">
            <div>
              <img src="/images/Logo.png" className="w-48" />
            </div>
            <div className="ml-auto">social media icons to come here</div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
