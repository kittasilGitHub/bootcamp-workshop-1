// http://localhost:3000/sign-up
// ไม่เอา (auth) มาเป็น url
// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function SignUpPage() {
  return (
    <main>
      Sign Up Page
    </main>
  );
}