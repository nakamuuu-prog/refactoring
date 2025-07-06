const organization = { name: 'Acme Gooseberries', country: 'GB' };

function getRawDataOfOrganization() {
  return organization;
}

// 参照時
result += `<h1>${getRawDataOfOrganization().name}</h1>`;

// 更新時
getRawDataOfOrganization().name = newName;
