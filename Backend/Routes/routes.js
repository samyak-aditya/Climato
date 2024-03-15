import { login } from "../Controllers/auth";
import { signUp } from "../Controllers/user";

const router = express.Router();

router.post('/signup', signUp)
router.post('/login', login)