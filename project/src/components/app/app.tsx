import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import AuthScreen from '../auth-screen/auth-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import WelcomeScreen from '../welcome-screeen/welcome-screen';
import WinScreen from '../win-screen/win-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  errorsCount: number;
}

function App({errorsCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<WelcomeScreen errorsCount={errorsCount}/>}
        />
        <Route
          path={AppRoute.DevGenre}
          element={<GenreQuestionScreen />}
        />
        <Route
          path={AppRoute.DevArtist}
          element={<ArtistQuestionScreen />}
        />
        <Route
          path={AppRoute.Login}
          element={<AuthScreen />}
        />
        <Route
          path={AppRoute.Result}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <WinScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Lose}
          element={<GameOverScreen />}
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
