const activeClass = "active";
const hideClass = 'hidden';
const tabDisplays = document.querySelectorAll(".tab-display");

for (const tabDisplay of tabDisplays) {
  const tabTriggers = tabDisplay.querySelectorAll(".tabs-triggers a");
  const tabContentAreas = tabDisplay.querySelectorAll(".tab");

  for (const tabContentArea of tabContentAreas) {
    tabContentArea.classList.add(hideClass);
  }

  let activeTab = Array.from(tabTriggers).find((trigger) => {
    return trigger.classList.contains(activeClass);
  });

  if (!activeTab) {
    activeTab = tabTriggers[0];
    activeTab.classList.add(activeClass);
  }

  const activeTabContent = tabDisplay.querySelector(activeTab.getAttribute('href'));
  activeTabContent.classList.remove(hideClass);

  for (const trigger of tabTriggers) {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      
      const activeTab = Array.from(tabTriggers).find((trigger) => {
        return trigger.classList.contains(activeClass);
      });
      activeTab.classList.remove(activeClass);

      const activeContent = tabDisplay.querySelector(activeTab.getAttribute('href'));
      activeContent.classList.add(hideClass);
      

      const trigger = e.target;
      trigger.classList.add(activeClass);

      const activeTabContent = tabDisplay.querySelector(trigger.getAttribute('href'));
      activeTabContent.classList.remove(hideClass);
    });
  }
}
