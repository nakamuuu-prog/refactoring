const organization = { name: 'Acme Gooseberries', country: 'GB' };

// 参照時
result += `<h1>${organization.name}</h1>`;

// 更新時
organization.name = newName;
