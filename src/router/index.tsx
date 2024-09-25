import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "../pages/layout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHandler";
import HomePage from "../pages";
import AboutPage from "../pages/about";
import ContributePage from "../pages/ContributePage";
import QuickStartPage from "../pages/learn";
import InstallationPage from "../pages/learn/Installation";
import LearnLayout from "../pages/learn/Layout";
import ThinkingInReactPage from "../pages/learn/thinkingInReact";
import LoginPage from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import ContactPage from "../pages/contact";


const isLoggedIn = false;
const userData: { email: string } | null = isLoggedIn ? { email: "email@gmail.com" } : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="contribute"
          element={
            <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login" data={userData}>
              <ContributePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/contribute" data={userData}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
        <Route path="instalition" element={<InstallationPage />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;