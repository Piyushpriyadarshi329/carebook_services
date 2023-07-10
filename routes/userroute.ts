
const {register, login} = require('../controllers/usercontroller');
const router = express.Router();



router.post('/login', login);
router.post('/register', register);
module.exports = router;