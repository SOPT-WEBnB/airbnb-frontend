import GlobalStyle from 'components/common/GlobalStyle';
import Router from 'components/common/Router';
import theme from 'components/common/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
