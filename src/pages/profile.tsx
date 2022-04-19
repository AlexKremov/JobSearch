import Register from '../components/RegisterForm';
import MainLayout from '../layouts/mainlayout';

export default function Profile() {
  return (
    <MainLayout>
      <main style={{ padding: '1rem 0' }}>
        <Register />
      </main>
    </MainLayout>
  );
}
