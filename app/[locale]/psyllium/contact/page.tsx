import { redirect } from 'next/navigation';
type Props = { params: Promise<{ locale: string }> };
export default async function PsylliumContactRedirect({ params }: Props) {
  const { locale } = await params;
  redirect(`/${locale}/contact`);
}
