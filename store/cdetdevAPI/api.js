import axios from "axios"
const cdetdevAPI = axios.create({
  baseURL: "https://cdet8-dev-102523.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return cdetdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_cbfv_list(payload) {
  return cdetdevAPI.get(`/api/v1/cbfv/`)
}
function api_v1_cbfv_create(payload) {
  return cdetdevAPI.post(`/api/v1/cbfv/`, payload)
}
function api_v1_cbfv_retrieve(payload) {
  return cdetdevAPI.get(`/api/v1/cbfv/${payload.id}/`)
}
function api_v1_cbfv_update(payload) {
  return cdetdevAPI.put(`/api/v1/cbfv/${payload.id}/`, payload)
}
function api_v1_cbfv_partial_update(payload) {
  return cdetdevAPI.patch(`/api/v1/cbfv/${payload.id}/`, payload)
}
function api_v1_cbfv_destroy(payload) {
  return cdetdevAPI.delete(`/api/v1/cbfv/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return cdetdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return cdetdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return cdetdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return cdetdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return cdetdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return cdetdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return cdetdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return cdetdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return cdetdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return cdetdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return cdetdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return cdetdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return cdetdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_cbfv_list,
  api_v1_cbfv_create,
  api_v1_cbfv_retrieve,
  api_v1_cbfv_update,
  api_v1_cbfv_partial_update,
  api_v1_cbfv_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
