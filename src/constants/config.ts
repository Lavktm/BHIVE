// TODO: to be loaded from .env file later

const APP_PORT = process.env.PORT || 3000;

const APP_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || `http://localhost:${APP_PORT}`;
const APP_API_URL =
  process.env.NEXT_PUBLIC_BACKEND_API_URL ||
  `http://localhost:${APP_PORT}/dashboard/api`;

export const siteConfig = {
  title: "BHIVE Workspace",
  description: "Managed Office Space & Enterprise Coworking Solutions.",
  url: "https://bhiveworkspace.com/workspace/?utm_source=google&utm_medium=cpc&utm_campaign=search&utm_id=brand_campaign&utm_term=paid&utm_content=text&utm_term=bhive%20workspace&utm_campaign=Brand+%7C+Bangalore&utm_source=adwords&utm_medium=ppc&hsa_acc=2227381840&hsa_cam=20399493972&hsa_grp=152309705472&hsa_ad=667107219246&hsa_src=g&hsa_tgt=kwd-385625049083&hsa_kw=bhive%20workspace&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjw0ruyBhDuARIsANSZ3wqsSg8e6E9c9TyOWSgD2WUj4BnyNPllmx9z401kD0Ol_M1l1Wz1Qi0aArpWEALw_wcB",
  appUrl: APP_URL,
  appApiUrl: APP_API_URL,
};
