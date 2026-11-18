# 4. Telas do Portal de Serviços

Para os adquirentes (motoristas, MEIs e empresas) que realizam a inclusão do evento de manifestação de forma manual ou em lote pelo navegador web, o portal disponibiliza as seguintes telas:

## Telas 1 e 2: Autenticação e Acesso ao Sistema (Login)

![Figura 3 – Tela de autenticação (Telas 1 e 2): botão "Entrar com GOV.BR"](../img/fig-p09-autenticacao-login.png)

![Figura 4 – Tela de identificação do gov.br, com opções de login e certificado digital](../img/fig-p09-govbr-identificacao.png)

<!-- p.10 -->

- **URL de Acesso:** <https://portal-servicos-nfsevia.estaleiro.serpro.gov.br/manifestacao>
- **Objetivo:** Garantir a identificação segura e a validade jurídica do responsável pelo registro da manifestação.
- **Elementos da Tela:**
    - Botão "Entrar com GOV.BR": Direciona para o login simplificado da plataforma GOV.BR, exigindo credenciais de nível Prata ou Ouro (ideal para Pessoas Físicas, MEIs e procuradores).
    - Botão "Acesso com Certificado Digital": Permite a autenticação mútua via certificado digital e-CPF ou e-CNPJ (tipos A1 ou A3).
- O usuário acessa a página inicial e escolhe a forma de autenticação. Após a validação das credenciais pelo sistema, o perfil do adquirente é carregado automaticamente na sessão.

## Telas 3: Painel Principal / Seleção de Serviço (Home)

![Figura 5 – Painel principal (Tela 3), com os atalhos para os serviços disponíveis ao adquirente](../img/fig-p10-tela-3-painel-principal.png)

- Apresenta as opções de navegação e atalhos para os serviços disponíveis ao adquirente.
- **Elementos da Tela:**
    - Nova Manifestação – inclusão da Manifestação;
    - "Meus Documentos Manifesta": Lista o histórico de eventos já registrados para aquele CPF/CNPJ, com a possibilidade de download do XML gerado;

<!-- p.11 -->

## Telas 4 a 6: Seleção de Serviço

![Figura 6 – Telas 4 a 6: seleção do tipo de manifestação (Individual ou Múltipla)](../img/fig-p11-telas-4-6-tipo-manifestacao.png)

- Apresenta as opções de Tipo de Manifestação – Individual ou Múltipla.
    - Cartão de Serviço 1 – "Manifestação Individual": Atalho para digitar e manifestar uma única chave de nota por vez.
    - Cartão de Serviço 2 – "Manifestação em Lote Web": Atalho para enviar conjuntos de até 10 chaves de nota simultaneamente.
- O usuário seleciona a modalidade de envio desejada conforme o volume de notas que possui para registrar.
    - Se optar pela Individual, deve informar a chave da NFS-e Via para a qual deseja realizar a manifestação;
    - Informar se a Manifestação é de "aceite" (os dados da NFS-e Via estão corretos), ou de "Rejeição" (alguma informação da NFS-e Via não está correta). Neste caso deve informar o motivo da Rejeição.

<!-- p.12 -->

![Figura 7 – Telas 4 a 6: manifestação individual, com a escolha entre "Com Aceite" e "Com Rejeição"](../img/fig-p12-telas-4-a-6-manifestacao-individual.png)

![Figura 8 – Telas 4 a 6: seleção do motivo da rejeição (cMotivo)](../img/fig-p12-telas-4-a-6-motivo-rejeicao.png)

- Ou, caso optar pela opção "Múltiplas", será mostrada a opção importar arquivo .txt/.csv contendo até 10 chaves de acesso de NFS-e Via.

<!-- p.13 -->

![Figura 9 – Telas 7 e 8: manifestação múltipla, com seleção do arquivo de chaves e botão "Avançar"](../img/fig-p13-telas-7-e-8-lote-upload.png)

## Telas 7 e 8: Lista de Lote de Chaves e validação

- Acionar o botão "Avançar": Processa todas as chaves válidas da tabela em uma única operação.
- O Sistema lista cada chave informada e mostra um indicador visual de integridade (*Chave Válida*, *Tamanho Incorreto* ou *Nota Já Manifestada*).
- Deve-se informar em cada uma delas se é de "Aceite" ou "Rejeição", neste caso informar o motivo individualmente.

![Figura 10 – Telas 7 e 8: lista de NFS-e Via do lote, com indicação de chaves com erro de validação](../img/fig-p13-telas-7-e-8-lista-chaves-validacao.png)

<!-- p.14 -->

![Figura 11 – Telas 7 e 8 (continuação): alerta de chave de acesso que já possui eventos de manifestação de aceite e rejeição](../img/fig-p14-telas-7-e-8-chave-ja-manifestada.png)

## Tela 9: Confirmação do envio

- O sistema exigirá que cada Manifestação seja assinada com o Certificado Digital ou assinatura Gov.br.
- Então dará o retorno da(s) Manifestações registradas.

![Figura 12 – Tela 9: mensagem de manifestação enviada com sucesso, com o número do protocolo](../img/fig-p14-tela-9-envio-com-sucesso.png)

## Tela 10: Download do xml

- Após a emissão da Manifestação, é possível fazer o download do XML gerado no ícone disponível.

![Figura 13 – Tela 10: lista de "Meus Documentos Manifestados", com o ícone de download do XML](../img/fig-p14-tela-10-download-xml.png)
