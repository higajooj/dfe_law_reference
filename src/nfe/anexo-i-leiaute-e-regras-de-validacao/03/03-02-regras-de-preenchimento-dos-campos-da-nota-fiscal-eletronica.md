# 3.2. Regras de preenchimento dos campos da Nota Fiscal Eletrônica

- Campos que representam códigos (CNPJ, CPF, CEP, CST, NCM, EAN, etc.) devem ser informados com o tamanho fixo previsto, sem formatação e com o preenchimento dos zeros não significativos;
- Campos numéricos que representam valores e quantidades são de tamanho variável, respeitando o tamanho máximo previsto para o campo e a quantidade de casas decimais. O preenchimento de zeros não significativos causa erro de validação do Schema XML. Os campos numéricos devem ser informados sem o separador de milhar, com uso do ponto decimal para indicar a parte fracionária se existente respeitando-se a quantidade de dígitos prevista no leiaute; <!-- p.70 -->
- O uso de caracteres acentuados e símbolos especiais para o preenchimento dos campos alfanuméricos devem ser evitados. Os espaços informados no início e no final do campo alfanumérico também devem ser evitados;
- As datas devem ser informadas no formato “AAAA-MM-DD”;
- A forma e a Obrig.atoriedade de preenchimento dos campos da Nota Fiscal Eletrônica estão previstas na legislação aplicável para a operação que se pretende realizar;
- Inexistindo conteúdo (valor zero ou vazio) para um campo não Obrig.atório, a TAG deste campo não deverá ser informada no arquivo da NF-e;
- Tratando-se de operações com o exterior, uma vez que o campo CNPJ é Obrig.atório não informar o conteúdo deste campo;
- No caso das pessoas desObrigadas de inscrição no CNPJ/MF, deverá ser informado o CPF da pessoa, exceto nas operações com o exterior.
