# 4.3.1 Geração do Hash do QR Code na emissão ONLINE

Os passos para geração do Hash do QR Code na emissão online estão descritos a seguir e exemplificados na seção:

<!-- REVISAR p.24: referência de seção ausente no original (“exemplificados na seção:”) -->

- **Passo 1:** Concatenar os parâmetros de 1 a 4 constantes da tabela 2 (seção 4.2.1) separados por “|” na ordem indicada;
- **Passo 2:** Adicionar ao final da string o CSC (disponibilizado pela SEFAZ da UF onde a empresa está localizada);
- **Passo 3:** Aplicar o algoritmo SHA-1 sobre o resultado e converter para hexadecimal, correspondendo a 40 bytes.
