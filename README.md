2. **Add Deployment Scripts**: 
   Include the following scripts in the `scripts` section of your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
   
3. **Deploy**:
   ```bash
   npm run deploy
   ```
   
   