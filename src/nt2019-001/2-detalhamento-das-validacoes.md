<!-- p.13 -->
# 2 Detalhamento das Validações

- **Grupo B. Identificação da NF-e**: criada a Regra de Validação **B03-10**, para dificultar a utilização de um código de segurança fraco.
- **Grupo BA. Documento Referenciado**:
  - alterada a Regra de Validação **BA10-40**, possibilitando a utilização do CNPJ 8 com o objetivo de identificar que a nota foi emitida pelo mesmo contribuinte, a critério da unidade federada.
  - criada a Regra de Validação **BA10-50**, exigindo que uma contranota de produtor rural somente possa referenciar uma nota emitida por outro produtor rural, a critério da unidade federada.
  - criada a Regra de Validação **BA20-20**, impedindo que seja referenciado um documento fiscal de uso exclusivo para operações internas em uma operação destinada a outra unidade federada ou para o exterior.
  - criada a Regra de Validação **BA20-30**, impedindo referência a um Cupom Fiscal, a critério da unidade federada.
- **Grupo E. Identificação do Destinatário**:
  - criada a Regra de Validação **E03a-30**, impedindo o uso simultâneo de IE e de identificação de estrangeiro para o destinatário. criada a Regra de Validação **E14-30**, impedindo informação de país de destino “Brasil” em operações destinadas ao estrangeiro.
  - criada a Regra de Validação **E16a-40**, exigindo a indicação de “operação com consumidor final” quando se indica que a operação é destinada a não contribuinte.
- **Detalhamento Produtos e Serviços**: criada a Regra de Validação **H02-10**, com o objetivo de informar os números do item em ordem sequencial.
- ~~**Grupo I. Produtos e Serviços da NF-e**: criadas regras de validação tornando obrigatória a informação do Motivo da Desoneração e do Valor do ICMS desonerado, caso seja informado o Código do Benefício Fiscal:~~
  - ~~criada a Regra de Validação **I05f-10**, impedindo a informação de um código de benefício fiscal juntamente com um CST que não prevê benefício fiscal, a critério da unidade federada.~~
  - ~~criada a Regra de Validação **I05f-20**, impedindo a informação de um código de benefício fiscal que não corresponda ao CST utilizado, a critério da unidade federada.~~
  - ~~criada a Regra de Validação **I05f-30**, exigindo que seja informado o valor do ICMS desonerado ou o motivo de desoneração quando se utiliza um código de benefício fiscal, a critério da unidade federada~~

> **Revogado/Descontinuado:** texto riscado na fonte, relativo ao grupo I (regras I05f-10, I05f-20 e I05f-30).

- **Grupo N. Item / Tributo: ICMS**:
  - criada a Regra de Validação **N12-97** ~~**N07-10**~~, exigindo informações sobre o diferimento quando se utiliza um CST de diferimento, a critério da unidade federada.
  - criada a Regra de Validação **N12-85** ~~**N12-84**~~, exigindo o código de benefício fiscal quando se utiliza um CST de benefício fiscal, a critério da unidade federada. criada a Regra de Validação **N12-86**, impedindo que se informe o código de benefício fiscal para CST de benefício fiscal, a critério da unidade federada.
  - criada a Regra de Validação **N12-94** ~~**N12-88**~~, exigindo que o CST corresponda ao tipo de código de benefício fiscal informado, a critério da unidade federada.
  - criada a Regra de Validação **N12-98**, que verifica a existência do cBenef, a critério da unidade federada, exceto para Simples Nacional. criada a Regra de Validação **N12-90**, exigindo valor do ICMS desonerado e o motivo da desoneração, a critério da unidade federada.
  - criada a Regra de Validação **N18-10**, exigindo a informação do percentual da margem de valor Adicionado do ICMS ST Informada caso a modalidade de determinação da BC da ST seja MVA, a critério da unidade federada.
  - criada a Regra de Validação **N18-20**, não permitindo informação do percentual da margem de valor Adicionado do ICMS ST Informada caso a modalidade de determinação da BC da ST não for MVA, a critério da unidade federada. alterada a Regra de Validação N28-20, incluindo os CFOP 6.905 e 6.923. Entrará em homologação e produção no dia 28/9/2020. alterado o texto da Regra de Validação N12-86.

<!-- p.14 -->
- **Grupo W. Total da NF-e**: Criada a Regra de Validação **W03-20**, por modelo de DF-e, impedindo a informação de um valor de Base de Cálculo superior ao valor máximo estabelecido pela respectiva SEFAZ.
- ~~**Banco de Dados: Emitente**: Criada a Regra de Validação **1C03-10**, impedindo a informação de Razão Social do emitente diferente da existente no cadastro da Sefaz.~~

> **Revogado/Descontinuado:** texto riscado na fonte; a regra 1C03-10 é removida (item 1.3 desta NT).

- **Banco de Dados: Destinatário**: Criadas as Regras de Validação **5E17-10, 5E17-20, 5E17-30, 5E17-40, 5E17-43, 5E17-46, 5E17-50, 5E17-60, 5E17-63, 5E17-70 e 5E17-80**, para verificar se o destinatário está sendo informado corretamente ou se está em situação que o impeça de constar na NF-e como destinatário na operação com mercadoria ou prestação de serviços.
- **Serviço Autorização EPEC**: Criadas as Regras de Validação **6P31-10, 6P31-20, 6P31-30, 6P31-40, 6P31-43, 6P31-46, 6P31-50, 6P31-60 e 6P31-63**, para verificar se o destinatário está sendo informado corretamente ou se está em situação que o impeça de constar na NF-e como destinatário na operação com mercadoria ou prestação de serviços.
