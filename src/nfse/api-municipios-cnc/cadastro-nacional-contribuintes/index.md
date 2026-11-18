<!-- p.03 -->

# Cadastro Nacional de Contribuintes (CNC) – API

O CNC NFS-e é um dos módulos do Sistema Nacional NFS-e e estará disponível para os municípios que efetivarem convênio com o Sistema Nacional da Nota Fiscal de Serviços Eletrônica – SN NFS-e.

O CNC NFs-e tem como objetivo ser o repositório das informações cadastrais que dizem respeito à situação tributária do contribuinte no âmbito municipal.

A definição de uso das informações do CNC NFS-e dentro do Sistema Nacional NFS-e deverá ser informada quando o município realizar as parametrizações de seu convênio. Esta opção poderá ser alterada caso seja do interesse do município.

Após a ativação do convênio pelo município, caso tenha optado pelo uso do CNC NFS-e, então todas as validações de emissões de NFS-e dos seus contribuintes serão validadas pelas informações que estiverem cadastradas no CNC deste município na data de competência da emissão da NFS-e.

O CNC NFS-e será composto pelas bases cadastrais de todos os municípios que optarem pelo envio e manutenção das informações de seus contribuintes.

A distribuição do cadastro CNC NFSe para os municípios também é uma das finalidades do CNC NFS-e e estará disponível para aqueles que optarem por, também, utilizar as informações do CNC NFS-e como a base de dados que é utilizada para validar as NFS-e de seus contribuintes. Outros municípios que aderirem ao sistema nacional utilizando os cadastros RFB como cadastro de validação das emissões de NFS-e de seus contribuintes em vez do CNC NFS-e poderão realizar consultas no CNC, mas não haverá distribuição das informações do CNC NFS-e, ou seja, as alterações realizadas por outros municípios sobre seus contribuintes poderão ser apenas consultadas, mas não distribuídas para aqueles municípios que optaram pelos cadastros RFB.

O CNC NFS-e foi criado para possibilitar a disponibilização de um repositório centralizado que viabilizasse a validação do emitente da NFS-e.

O CNC NFS-e é operado no âmbito do Sistema Nacional NFS-e e mantido pelos municípios, sendo responsabilidade de cada um deles realizar a alimentação das informações com respeito aos seus respectivos contribuintes.

O CNC NFS-e em sua versão atual trata contribuintes CPF e CNPJ desde que tenham Inscrição Municipal no próprio município.

## Definições do Sistema

- É importante ressaltar que todo o sistema está orientado para usar informações de uma tríade constituída por Código do Município, CNPJ/CPF e Inscrição Municipal (IM) de um estabelecimento, informados pelo município. Desta maneira, ao longo deste documento, todas referências a tríade “Município/CNPJ/IM” ou “Município/CPF/IM” devem ser levadas no contexto de que o par CNPJ/IM ou CPF/IM foi informado por um determinado Município.
- Note que o mesmo CNPJ/CPF pode ser informado por mais de um município e em um mesmo município, desde que tenha inscrições municipais diferentes.
- Está disponível um serviço que possibilitará o gerenciamento das informações permitindo a inclusão e alteração de informações e a exclusão lógica do contribuinte.
- O município será responsável pelo envio das informações respeitando as regras do layout para cada tipo de manutenção (inclusão, alteração, exclusão lógica).
- Será gerado histórico para cada movimentação enviada.
- Importante ressaltar que todo o Sistema Nacional da NFS-e leva em consideração a vigência das informações como por exemplo, alíquotas, benefícios, reduções, etc. Para as movimentações de alteração e exclusão lógica o mesmo conceito será utilizado.

<!-- p.04 -->

- Para o processamento das solicitações de movimentação de um contribuinte o CNC NFS-e irá considerar a chave única formada pelo código do município, o CNPJ/CPF e a IM do contribuinte informados.
- É de responsabilidade do município a definição da necessidade de envio das movimentações relativas aos seus contribuintes. O CNC NFS-e deverá fazer o processamento das solicitações tão logo as receba.
- O município poderá solicitar a qualquer momento cópia do CNC NFS-e. Para solicitar essa distribuição, o município poderá utilizar o NSU de cadastro ou NSU de movimento (ambos serão detalhados mais adiante). Poderá também utilizar outros filtros adicionais como CNPJ/CPF, Inscrição Municipal, código do município.
