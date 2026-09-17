import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastProvider } from '@/stores/ToastContext'
import { CertificationProvider } from '@/stores/CertificationContext'
import MainLayout from '@/layouts/MainLayout'
import ToastContainer from '@/components/common/ToastContainer'
import HomePage from '@/pages/HomePage'
import QuestionBankPage from '@/pages/QuestionBankPage'
import ExamSetupPage from '@/pages/ExamSetupPage'
import ExamRunnerPage from '@/pages/ExamRunnerPage'
import ExamResultsPage from '@/pages/ExamResultsPage'
import ExamReviewPage from '@/pages/ExamReviewPage'
import StatsPage from '@/pages/StatsPage'
import SmartReviewPage from '@/pages/SmartReviewPage'
import DevQuestionsPage from '@/pages/DevQuestionsPage'
import NotFoundPage from '@/pages/NotFoundPage'

function App() {
  return (
    <ToastProvider>
      <CertificationProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/bank" element={<QuestionBankPage />} />
              <Route path="/smart-review" element={<SmartReviewPage />} />
              <Route path="/exam" element={<ExamSetupPage />} />
              <Route path="/exam/results/:resultId" element={<ExamResultsPage />} />
              <Route path="/exam/review/:resultId" element={<ExamReviewPage />} />
              <Route path="/stats" element={<StatsPage />} />
              {import.meta.env.DEV && <Route path="/dev/questions" element={<DevQuestionsPage />} />}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path="/exam/run" element={<ExamRunnerPage />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </CertificationProvider>
    </ToastProvider>
  )
}

export default App
