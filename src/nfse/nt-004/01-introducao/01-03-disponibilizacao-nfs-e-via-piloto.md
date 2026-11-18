<!-- p.07 -->

# 1.3. Disponibilização da NFS-e Via - Piloto

A Nota Fiscal de Serviço Eletrônica de Exploração de Via (NFS-e Via) faz parte do Sistema Nacional da Nota Fiscal de Serviço eletrônica de padrão nacional. **Este documento fiscal eletrônico, de uso restrito pelas Concessionárias de Exploração de Rodovias para o serviço classificado sob o Código Tributário Nacional 22.01.01 (ANEXO_B-NBS2-LISTA_SERVICO_NACIONAL-SNNFSe-v1.00-20251210)**, abrange:

- Serviços de exploração de rodovia mediante cobrança de preço ou pedágio dos usuários (que inclui atividades envolvidas que incluem conservação, manutenção, melhoramentos para adequação de capacidade e segurança de trânsito, operação, monitoração, assistência aos usuários, e outros serviços definidos em contratos ou normas oficiais).

A NFS-e Via é gerada pelo contribuinte e transmitida para um Ambiente Nacional próprio, onde é validada, conforme especificações técnicas, e a resposta é dada de forma **síncrona** (via API REST).

As informações são fornecidas a partir de arquivos **XML**, com definições de campos e regras de preenchimento segundo *layout* que será submetido à aprovação pelo Comitê Gestor da NFS-e.

**Gestão e Consulta**

O sistema possui ferramentas específicas para gestão e consulta:

- **Portal de Gestão NFS-e Via**: de uso restrito, é utilizado para a **parametrização** de informações essenciais, como o cadastro de Contratos, Trechos de concessão, Praças de pedágio, Municípios de abrangência, extensão da via em cada município e a alíquota dos tributos. Esses dados servem como fonte para validação no *layout* da NFS-e Via;
- **APIs de Recepção**: Permitem o recebimento e validação da NFS-e Via, bem como eventos de **Cancelamento e Substituição**;
- **APIs de Consultas**: Permitem que as concessionárias consultem o resultado da recepção ou validação por protocolo ou chave de acesso, e consultem a Alíquota Efetiva por trechos sob concessão.

**Projeto Piloto - Liberação no Ambiente de Produção Restrita**

<!-- p.08 -->

O Projeto Piloto, iniciado em agosto, foi concluído com sucesso graças à colaboração das empresas participantes, que auxiliaram na validação do layout e das regras no ambiente de homologação.

Para as Concessionárias:

Nos próximos dias, o ambiente de Produção Restrita será liberado para testes e todas as Concessionárias poderão utilizá-lo para se adaptarem ao novo modelo operacional.

- O Portal das Concessionárias (para configuração de contratos, trechos, praças e municípios) logo estará disponível em ambiente de Produção;
- Os links de acesso às aplicações estão disponíveis em: NFS-e Via — Portal da Nota Fiscal de Serviço eletrônica.
