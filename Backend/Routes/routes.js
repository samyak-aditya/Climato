import { signUp, login } from "../Controllers/auth";

const router = express.Router();

router.post('/signup', signUp)
router.post('/login', login)