import GlobalStyle from 'components/common/GlobalStyle';
import Router from 'components/common/Router';
import theme from 'components/common/theme';
import Toast from 'components/common/Toast';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
        <Toast />
      </ThemeProvider>
    </>
  );
}

export default App;
