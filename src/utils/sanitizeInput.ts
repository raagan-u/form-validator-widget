export const sanitizeInput = (value: string): string => {
	return value
		.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;').replace(/`/g, '&#96;').replace(/\//g, '&#x2F;'); 
};  