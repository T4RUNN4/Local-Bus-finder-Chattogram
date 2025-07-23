function addBanglaNames(obj) {
    
	const nameMap = {
		'Karnaphuli Bridge': 'কর্ণফুলী ব্রিজ',
		'Rajakhali': 'রাজাখালী',
		'Kalamia Bazar': 'কালামিয়া বাজার',
		'Nahar CNG': 'নাহার সিএনজি',
		'Ek Kilometer': 'এক কিলোমিটার',
		'Bahaddarhat': 'বহদ্দারহাট',
		'Kapasgola': 'কাপাসগোলা',
		'Chawkbazar': 'চকবাজার',
		'Sirajuddaula Road': 'সিরাজউদ্দৌলা রোড',
		'Andarkilla': 'আন্দরকিল্লা',
		'Laldighi': 'লালদীঘি',
		'New Market': 'নিউ মার্কেট',
		'Kalurghat Bridge': 'কালুরঘাট ব্রিজ',
		'Ispahani Masjid': 'ইস্পাহানী মসজিদ',
		'Kaptai Rastar Matha': 'কাপ্তাই রাস্তার মাথা',
		'C&B Rastar Matha': 'সিএন্ডবি রাস্তার মাথা',
		'Sharafat Petrol Pump': 'শরাফত পেট্রোল পাম্প',
		'Bus Terminal': 'বাস টার্মিনাল',
		'Bahaddarhat Police Box': 'বহদ্দারহাট পুলিশ বক্স',
		'Muradpur': 'মুরাদপুর',
		'Sholoshohor 2no Gate': 'ষোলশহর ২নং গেট',
		'Chattogram Medical': 'চট্টগ্রাম মেডিকেল',
		'Chawkbazar (Masjid)': 'চকবাজার (মসজিদ)',
		'Jamalkhan Road': 'জামালখান রোড',
		'Laldighi Jail Gate': 'লালদীঘি জেল গেট',
		'Tin Poler Matha': 'তিন পোলের মাথা',
		'Enayet Bazar': 'এনায়েত বাজার',
		'Kotwali Mor': 'কোতয়ালী মোড়',
		'Bouddho Mondir': 'বৌদ্ধ মন্দির',
		'Kazir Deuri': 'কাজীর দেউড়ি',
		'WASA': 'ওয়াসা',
		'Hamzarbag': 'হামজারবাগ',
		'Oxygen': 'অক্সিজেন',
		'Baluchara': 'বালুছরা',
		'Nondir Hat': 'নন্দীরহাট',
		'Fateyabad': 'ফতেয়াবাদ',
		'Puraton Station': 'পুরাতন স্টেশন',
		'Tiger Pass': 'টাইগার পাস',
		'WASA Mor': 'ওয়াসা মোড়',
		'Garibullah Shah Mazar': 'গরীবউল্লাহ শাহ মাজার',
		'Wireless Colony': 'ওয়্যারলেস কলোনি',
		'USTC': 'ইউএসটিসি',
		'AK Khan': 'এ কে খান',
		'Colonel Hat': 'কর্নেল হাট',
		'City Gate': 'সিটি গেট',
		'Fakir Hat Over Bridge': 'ফকিরহাট ওভার ব্রিজ',
		'Fouzdarhat': 'ফৌজদারহাট',
		'Banur Bazar': 'বানুর বাজার',
		'BM Gate': 'বিএম গেট',
		'Bhatiary': 'ভাটিয়ারী',
		'Madarbari': 'মাদারবাড়ি',
		'Choumuhoni': 'চৌমুহনী',
		'Badamtali': 'বাদামতলী',
		'Barik Building': 'বারিক বিল্ডিং',
		'Fakir Hat': 'ফকিরহাট',
		'Nimtola Bridge': 'নিমতলা ব্রিজ',
		'Salt Gola': 'সল্টগোলা',
		'EPZ': 'ইপিজেড',
		'Bandar Tila': 'বন্দর টিলা',
		'Cement Crossing': 'সিমেন্ট ক্রসিং',
		'Floatilla': 'ফ্লোটিলা',
		'Standard Asiatic Oil': 'স্ট্যান্ডার্ড এশিয়াটিক অয়েল',
		'Drydock': 'ড্রাইডক',
		'Koylar Dipu': 'কয়লার ডিপু',
		'Airport': 'এয়ারপোর্ট',
		'Zilla Police Line': 'জেলা পুলিশ লাইন',
		'Rajmukut': 'রাজমুকুট',
		'WAPDA Gate': 'ওয়াপদা গেট',
		'Noyabazar': 'নয়াবাজার',
		'Alonkar': 'অলংকার',
		'Fakir Hat Bridge': 'ফকিরহাট ব্রিজ',
		'Kadamtali': 'কদমতলী',
		'Ruby Gate': 'রুবি গেট',
		'Shershah Colony': 'শেরশাহ কলোনি',
		'Bayezid': 'বায়েজিদ',
		'Kalurghat': 'কালুরঘাট',
		'Sholoshohor Rail Station': 'ষোলশহর রেল স্টেশন',
		'GEC': 'জিইসি',
		'Ispahani Mor': 'ইস্পাহানী মোড়',
		'Dewan Hat': 'দেওয়ানহাট',
		'Bandar Post Office': 'বন্দর পোস্ট অফিস',
		'Customs Bridge': 'কাস্টমস ব্রিজ',
		'Salt Gola Crossing': 'সল্টগোলা ক্রসিং',
		'CEPZ': 'সিইপিজেড',
		'Katgor Refinery Colony Gate': 'কাটগর রিফাইনারি কলোনি গেট',
		'Sea Beach': 'সি-বিচ',
		'BM Gate': 'বিএম গেট',
		'Steel Mill': 'স্টিল মিল',
		'Katgor': 'কাটগর',
		'Custom Mor': 'কাস্টম মোড়',
		'Boro Pol': 'বড় পোল',
		'Nimtola': 'নিমতলা',
	};
	const newObj = {};
    
	for (const key in obj) {
        
		let newKey = key;
		newKey = newKey.replace(/\s*[\]\[]/g, '').trim();
        
        if (nameMap[newKey] && !newKey.includes(' - ')) {
            newKey = `${newKey} - ${nameMap[newKey]}`;
        }
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            newObj[newKey] = addBanglaNames(obj[key]);
        } else {
            newObj[newKey] = obj[key];
        }
    }
    return newObj;
}

const updatedFareCharts = addBanglaNames(fareCharts);
fareCharts = updatedFareCharts;

const allLocations = new Set();
	
for (const route of Object.values(fareCharts)) {
	for (const startPoint in route) {
		allLocations.add(startPoint);
		for (const destination in route[startPoint]) {
			allLocations.add(destination);
		}
	}
}
	
const locationList = Array.from(allLocations);

let currentLang = "bn";
let t = translations[currentLang];
let lastResult = null;

function switchLanguage() {
	
	t = translations[currentLang];

	const updateText = (id, value, isPlaceholder = false) => {
		const el = document.getElementById(id);
		if (el) {
			if (isPlaceholder) el.placeholder = value;
			else el.textContent = value;
		} else {
			console.warn(`Element with ID "${id}" not found.`);
		}
	};

	updateText("languageToggle", t.language);
	updateText("mainHeading", t.mainHeading);
	updateText("subHeading", t.subHeading);
	updateText("start", t.start);
	updateText("dest", t.dest);
	updateText("startingPoint", t.startPlaceholder, true);
	updateText("destination", t.destPlaceholder, true);
	updateText("searchButton", t.search);
	updateText("rootHeading", t.rootHeading);
	updateText("rootSubheading", t.rootSubheading);
	updateText("fareHeading", t.fareHeading);
	updateText("fareSubheading", t.fareSubheading);
	updateText("warning", t.warning);
	updateText("info", t.info);
	updateText("allRoute", t.allRoute);
	updateText("dev", t.dev);

	const resultContainer = document.getElementById("result-container");
	
	if (lastResult && !resultContainer.classList.contains("hidden")) {

		const { routes, averageFare } = lastResult;

		const routeText = currentLang === "bn" ? routes.map(toBengaliNumber).join(', ') : routes.join(', ');

		const fareText = currentLang === "bn" ? toBengaliNumber(averageFare.toFixed(2)) : averageFare.toFixed(2);

		document.getElementById("root-number").textContent = routeText;
		document.getElementById("fair-amonut").textContent = fareText;
	}


	const errorDiv = document.getElementById("error-message");
	const start = document.getElementById("startingPoint").value.trim();
	const dest = document.getElementById("destination").value.trim();

	if (!errorDiv.classList.contains("hidden")) {
		if (!start || !dest) errorDiv.textContent = t.nullValue;
		else if (start === dest) errorDiv.textContent = t.sameValue;
		else errorDiv.textContent = t.noValue;
	}
}


function toBengaliNumber(num) {
    
	const bengaliDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
    return num.toString().split('').map(d => bengaliDigits[d] || d).join('');

}

function findFare(start, dest) {
	
	const results = [];

	for (const route in fareCharts) {
		
		const startPoints = fareCharts[route];
		
		for (const s in startPoints) {
			
			const destinations = startPoints[s];
			
			if (s === start && dest in destinations) {
				results.push({ route, fare: destinations[dest] });
			}

		}

	}

	return results;
}

function suggestion(inputId) {
	
	const input = document.getElementById(inputId);
	const suggestionBox = document.createElement('ul');

	suggestionBox.className = 'absolute z-10 bg-white border border-gray-300 mt-1 rounded-xl shadow-lg max-h-60 overflow-y-auto hidden';
	suggestionBox.style.width = input.offsetWidth + 'px';
	suggestionBox.id = `${inputId}-suggestions`;
	input.parentNode.appendChild(suggestionBox);

	let currentFocus = -1;
	let suppressInput = false;

	function highlightMatch(text, query) {
		
		const start = text.toLowerCase().indexOf(query.toLowerCase());
		if (start === -1) return text;

		const end = start + query.length;
		return (
			text.slice(0, start) +
			'<span class="font-semibold text-green-600">' +
			text.slice(start, end) +
			'</span>' +
			text.slice(end)
		);

	}

	input.addEventListener('input', () => {
		if (suppressInput) {
			suppressInput = false;
			return;
		}

		const query = input.value.trim().toLowerCase();
		suggestionBox.innerHTML = '';
		currentFocus = -1;

		if (!query) {
			suggestionBox.classList.add('hidden');
			return;
		}

		let matches = locationList
			.filter(loc => loc.toLowerCase().includes(query))
			.slice(0, 10);

		if (matches.length === 0) {
			suggestionBox.classList.add('hidden');
			return;
		}

		matches.forEach((match) => {
			const li = document.createElement('li');
			li.innerHTML = highlightMatch(match, input.value);
			li.className = 'px-4 py-2 hover:bg-green-100 cursor-pointer';
			li.tabIndex = -1;

			li.addEventListener('mousedown', (e) => {
				e.preventDefault();
				input.value = match;
				suggestionBox.classList.add('hidden');
				suppressInput = true;
			});

			suggestionBox.appendChild(li);
		});

		suggestionBox.classList.remove('hidden');
	});

	input.addEventListener('keydown', (e) => {
		
		const items = suggestionBox.getElementsByTagName('li');
		if (items.length === 0) return;

		if (e.key === 'ArrowDown') {
			currentFocus++;
			if (currentFocus >= items.length) currentFocus = 0;
			setActive(items);
		} else if (e.key === 'ArrowUp') {
			currentFocus--;
			if (currentFocus < 0) currentFocus = items.length - 1;
			setActive(items);
		} else if (e.key === 'Enter') {
			e.preventDefault(); 

			if (currentFocus > -1 && items[currentFocus]) {
				items[currentFocus].dispatchEvent(new Event('mousedown'));
			} else {
				const firstItem = items[0];
				if (firstItem) {
					input.value = firstItem.textContent;
					suggestionBox.classList.add('hidden');
				}
			}

			if (inputId === 'startingPoint') {
				document.getElementById('destination')?.focus();
			}
		}
	});

	function setActive(items) {
		
		for (let i = 0; i < items.length; i++) {
			items[i].classList.remove('bg-blue-100');
		}
		if (items[currentFocus]) {
			items[currentFocus].classList.add('bg-blue-100');
			items[currentFocus].scrollIntoView({
				block: 'nearest',
				inline: 'nearest'
			});

		}

	}

	document.addEventListener('click', (e) => {
		
		if (!e.target.closest(`#${inputId}`) && !e.target.closest(`#${suggestionBox.id}`)) {
			suggestionBox.classList.add('hidden');
		}
	});
}

function findRoute() {
	
	const userStart = document.getElementById('startingPoint').value.trim();
	const userDest = document.getElementById('destination').value.trim();
	const errorDiv = document.getElementById('error-message');
	const resultContainer = document.getElementById('result-container');

	if (!userStart || !userDest) {
		
		errorDiv.classList.remove('hidden');
		resultContainer.classList.add('hidden');
		errorDiv.textContent = t.nullValue;
		return;

	} else if (userStart === userDest) {
		
		errorDiv.classList.remove('hidden');
		resultContainer.classList.add('hidden');
		errorDiv.textContent = t.sameValue;
		return;

	} else {
		
		errorDiv.classList.add('hidden');
		resultContainer.classList.remove('hidden');
	}

	const results = findFare(userStart, userDest).concat(findFare(userDest, userStart));

	if (results.length === 0) {
		errorDiv.classList.remove('hidden');
		resultContainer.classList.add('hidden');
		errorDiv.textContent = t.noValue;
		return;
	}

	const allRoutes = results.map(r => r.route).sort((a, b) => a - b);
	const allFares = results.map(r => r.fare);

	const averageFare = Math.round(allFares.reduce((a, b) => a + b, 0) / allFares.length);

	const routeText = currentLang === "bn" ? allRoutes.map(toBengaliNumber).join(', ') : allRoutes.join(', ');

	const fareText = currentLang === "bn" ? toBengaliNumber(averageFare.toFixed(2)) : averageFare.toFixed(2);

	document.getElementById('rootHeading').textContent = t.rootHeading;
	document.getElementById('root-number').textContent = routeText;
	document.getElementById('rootSubheading').textContent = t.rootSubheading;

	document.getElementById('fareHeading').textContent = t.fareHeading;
	document.getElementById('fair-amonut').textContent = fareText;
	document.getElementById('fareSubheading').textContent = t.fareSubheading;

	lastResult = {

		routes: allRoutes,
		averageFare: averageFare

	};
}



function enableEnterKey(inputId) {
  
	const input = document.getElementById(inputId);
  
	input.addEventListener('keydown', function (event) {
    
		if (event.key === 'Enter') {
      
			event.preventDefault();
			findRoute();
    	}
	});
}

window.addEventListener('DOMContentLoaded', () => {

	switchLanguage();

	const toggleBtn = document.getElementById("languageToggle");
	if (toggleBtn) {

		toggleBtn.addEventListener("click", () => {
			currentLang = currentLang === "bn" ? "en" : "bn";
			switchLanguage();
		});
	}

	suggestion('startingPoint');
	suggestion('destination');
	enableEnterKey('destination');
});
