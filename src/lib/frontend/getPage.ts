export async function getPage(
  slug: string
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/pages/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}