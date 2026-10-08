<!-- p.07 -->

# 4 Preparação das expressões regulares do MDFe para o futuro CNPJ Alfanumérico

As alterações serão feitas no arquivo de tipos gerais e aplicam-se automaticamente a todos campos do tipo CNPJ e Chave de acesso em qualquer um dos schemas do projeto MDFe, entretanto, até que seja publicada uma Nota Técnica que modifica as validações desses campos, as letras não devem ser utilizadas.

A expressão regular que valida um campo do tipo CNPJ é: [0-9]{14}

**Alteração:** a Expressão regular do CNPJ passa a aceitar letras maiúsculas nas primeiras 12 posições: **[A-Z0-9]{12}[0-9]{2}**

Expressão Regular Atual da Chave de Acesso é: [0-9]{44}

**Alteração:** a expressão regular passa a suportar letras maiúsculas nas 12 primeiras posições que correspondem ao CNPJ dentro da chave de acesso: **[0-9]{6}[A-Z0-9]{12}[0-9]{26}**
