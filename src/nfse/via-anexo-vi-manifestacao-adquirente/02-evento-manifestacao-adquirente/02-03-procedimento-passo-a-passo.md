# 3. Procedimento Passo a Passo: Inclusão da Manifestação

A inclusão da manifestação pode ser realizada por dois canais oficiais.

## Canal 1: Via Portal de Serviços da NFS-e Via (Web)

Indicado para Pessoas Físicas, MEIs e empresas com volume moderado de passagens.

1. Acesso ao Portal:
    - Acesse a página do Portal de Serviços: <https://portal-servicos-nfsevia.estaleiro.serpro.gov.br/manifestacao>.
2. Autenticação e Assinatura:
    - O login deve ser realizado via plataforma GOV.BR (níveis Prata ou Ouro) ou por meio de Certificado Digital (e-CPF ou e-CNPJ).
3. Identificação do Adquirente:
    - Selecione o tipo de identificação (tipoNI): 1 – CPF ou 2 – CNPJ.
    - Informe o número correspondente do CPF/CNPJ e a Razão Social/Nome do adquirente.
4. Informe as Chaves de Acesso:
    - Digitação Individual: Insira a Chave de Acesso de 50 posições contida no RPV.
    - Envio em Lote Web: O portal permite realizar o upload agrupado de lotes contendo até 10 chaves de acesso por operação.
5. Confirmação:
    - Escolha o tipo de evento: Aceite (Confirmação) ou Rejeição.
    - Ao confirmar, o sistema assina eletronicamente e gera o recibo de registro do evento no ADN.

## Canal 2: Via API REST (Integração Automatizada)

Indicado para grandes transportadoras, frotistas e sistemas de gestão ERP.

1. Requisitos de Conexão:
    - Protocolo de Comunicação: HTTPS (TLS 1.2 ou superior) com autenticação mútua.

<!-- p.08 -->

    - Certificado Digital: Certificado digital ICP-Brasil de tipo A1 ou A3 (e-CNPJ raiz ou e-CPF) com permissão de cliente.
2. Endpoint da API de Recepção:
    - URL de Produção: POST https://certificado.api.via.nfse.gov.br/recepcao/manifestacao
3. Estrutura do XML do Evento:
    - Os arquivos XML devem seguir rigorosamente o esquema XSD disposto no Anexo IV (Leiaute RN ADN).
