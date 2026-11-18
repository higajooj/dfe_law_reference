# 2.1. APIs de Recepção

As APIs de Recepção NFS-e Via e seus eventos (Cancelamento, cancelamento por substituição, manifestação do adquirente) é uma ferramenta projetada para que as empresas e pessoas físicas obrigadas enviem os documentos eletrônicos (NFS-e Via, evento de Manifestação do Adquirente) em um ambiente nacional. Essas APIs recepcionam o documento e envia o resultado da validação dele.

**Processo de Validação:**

A API realiza uma série de validações para garantir a integridade e a conformidade das mensagens recebidas:

- Validação da Estrutura: Verificação do formato correto do JSON enviado. Análise dos campos que compõem a mensagem para garantir que estejam de acordo com as especificações da aplicação.

<!-- p.07 -->
- Validação do Certificado de Transmissão: Verificação da validade e autenticidade do certificado digital utilizado para a transmissão.
- Resultados da Transmissão:
  - Rejeição: Acontece quando há erros na estrutura da mensagem ou no certificado de transmissão. Neste caso, a API retorna uma mensagem de erro detalhada.
  - Sucesso na Recepção: Retorna uma mensagem de sucesso, confirmando que a mensagem foi recebida e está pronta para ser processada no ambiente nacional.

É fundamental destacar que o sucesso na recepção da mensagem não garante automaticamente a aceitação do documento no ambiente nacional. Após a recepção, o documento será processado em um momento posterior, deve-se verificar o resultado da validação para confirmar a aceitação do documento.

A API é uma ferramenta essencial para a transmissão de documentos eletrônicos de NFS-e Via, oferecendo serviços específicos para atender às necessidades das concessionárias. Com um processo de validação rigoroso, a API garante a segurança e a conformidade das transações, permitindo que as concessionárias enviem e processem documentos de forma eficiente e segura.
