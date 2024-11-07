export const SERVER_URL = process.env.API_URL

export const API_URL = {
	root: (url = '') => `${url ? url : ''}`,

	auth: (url = '') => API_URL.root(`/auth${url}`),

	getAllNodes: () => API_URL.root("nodes/all"),
	getNodeById: (id: number) => API_URL.root(`nodes/get/${id}`),
	createNode: () => API_URL.root("nodes/create")
}