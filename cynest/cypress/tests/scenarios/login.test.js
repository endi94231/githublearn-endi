import * as cookie from '@tests/helpers/cookie';
import * as route from '@tests/helpers/route';
import { ROUTES } from '@tests/const/routes';
import * as element from '@tests/helpers/elements';
import * as loginPage from '@tests/pages/login.page';
import * as data from '@tests/data/login.data';


describe('Login', ()=> {
        beforeEach(() => {
            cookie.clearCookies();
            route.visitDashboard(ROUTES.login);
        });

        it('Ensure that user will get error message when entered invalid username or password', () =>{
            element.fillField(loginPage.usernameField, data.INVALID_DATA.username)
            element.fillField(loginPage.passwordField, data.INVALID_DATA.password)
            element.
        });

    }
)