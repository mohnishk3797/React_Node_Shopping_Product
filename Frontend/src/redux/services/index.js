import auth from "./auth.service";
import education from "./education.services";
import profile from "./profile.service";
import livevol from "./livevol.service";
import stripe_session from "./stripe.service";
export const API_URL = "http://18.188.142.185/api";
export default {
  auth: auth(API_URL),
  education: education(API_URL),
  profile: profile(API_URL),
  stripe_session: stripe_session(API_URL),
  livevol: livevol(API_URL),
};
