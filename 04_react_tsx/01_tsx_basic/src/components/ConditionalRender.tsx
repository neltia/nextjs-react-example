type Props = { isLoggedIn: boolean };

export default function ConditionalRender({ isLoggedIn }: Props) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}