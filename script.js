class Smoothie {
    constructor(flavor, size, extras, notes) {
      this.flavor = flavor;
      this.size = size;
      this.extras = extras;
      this.notes = notes;
    }
  
    getDescription() {
      let description = `You ordered a ${this.size} ${this.flavor} smoothie`;
      if (this.extras.length > 0) {
        description += ` with ${this.extras.join(', ')}`;
      }
      if (this.notes) {
        description += `. Additional notes: ${this.notes}`;
      }
      return description;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const smoothieForm = document.getElementById("smoothie-form");
    const smoothieOutput = document.getElementById("smoothie-output");
  
    smoothieForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const flavor = smoothieForm.elements.flavor.value;
      const size = smoothieForm.elements.size.value;
      const extras = Array.from(smoothieForm.elements.extras.options)
                      .filter(option => option.selected)
                      .map(option => option.value);
      const notes = smoothieForm.elements.notes.value;
  
      const smoothie = new Smoothie(flavor, size, extras, notes);
      const description = smoothie.getDescription();
  
      smoothieOutput.innerText = description;
    });
  });
  