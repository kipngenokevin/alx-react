export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) => {
	if(isIndex) {
		return "Holberton School"
	}
	return "Holberton School main dashboard"
}