<!-- p.7 -->
# 4. Campos do tipo CNPJ

Os Campos que representam um CNPJ existem dispostos diversas vezes em todos os DFe, eventos e schemas de inúmeros serviços disponíveis.

A expressão regular que valida um campo do tipo CNPJ passa a aceitar letras maiúsculas nas primeiras 12 posições:

`[A-Z0-9]{12}[0-9]{2}`

**Observação:** Algumas letras não devem ser aceitas no CNPJ Alfa, como I, O, U, Q e F, essa exclusão faz parte das solicitações feitas pela equipe técnica do ENCAT para a Receita Federal do Brasil e precisa ser confirmada.

## Regras de Validação

Os campos de CNPJ estão associados a centenas de regras de validação nos Manuais e notas técnicas para os DFe e seus respectivos eventos.

A redação destas validações não se altera, uma vez que de forma geral, sinalizam que o CNPJ informado deve ser válido em relação ao DV e estar aderente ao cálculo apresentado no item 2 desta nota técnica.

A partir da data de implantação desta nota técnica, os contribuintes podem considerar que a rotina que faz a validação do cálculo do dígito verificador do CNPJ na SEFAZ Autorizadora está considerando o novo cálculo, e por consequência as rejeições já existentes serão aplicadas considerando-se o CNPJ informado, seja ele numérico ou alfanumérico.

<!-- p.8 -->
**Nota aos Autorizadores:** As rotinas de validação de CNPJ devem rejeitar CNPJ Alfanuméricos informados anteriores a data de implantação de cada ambiente (homologação e produção), mesmo que seja admitida a informação na validação de schema (já modificado). A rejeição aplicada nesse caso será a de falha no cálculo do Digito verificador.
