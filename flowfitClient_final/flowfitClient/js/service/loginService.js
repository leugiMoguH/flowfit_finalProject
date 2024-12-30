export const loginService = {
    async sendLoginData(data) {
        // Encripta a password antes de enviar
        const encryptedPassword = CryptoJS.SHA256(data.password).toString();



        

        // Simulação de pedido com sucesso e retorno de dados de sucesso (ex: token)
        try {
            const response = await fetch("http://ec2-54-225-116-123.compute-1.amazonaws.com/clients/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...data, password: encryptedPassword })
            });

            if (!response.ok) {
                throw new Error("Não foi possível efetuar o login. Verifique suas credenciais e tente novamente.");
            }

            const result = await response.json();
            return result; // Retorna os dados de sucesso (ex: token)
        } catch (error) {
            console.error("Erro no Login:", error.message);
            throw new Error("Erro no login, por favor tente mais tarde."); // Mensagem amigável
        }
    
    }
};
